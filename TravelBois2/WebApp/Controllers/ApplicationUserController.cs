using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ServerApp.Models;
using WebApp.Data;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _appSettings;
        private readonly UserContext _context;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings, UserContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        //POST: /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel body)
        {
            Console.WriteLine("post pozvan");
            var applicationUser = new ApplicationUser()
            {
                UserName = body.UserName,
                Email = body.Email,
                Name = body.Name,
                Lastname = body.Lastname,
                Grad = body.Grad,
                BrojPasosa = body.BrojPasosa.ToString(),
                BrojTelefona = body.BrojTelefona.ToString(),
                TipKorisnika = body.TipKorisnika
            };
            try
            {
                var result = await _userManager.CreateAsync(applicationUser, body.Password);
                if(result.Errors.Any())
                {
                    var test = result.Errors.ToList();
                    //return BadRequest(new { message = test[0].Description});
                    return Ok(result);
                }
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        
        [HttpPost]
        [Route("Login")]
        //POST: /api/ApplicationUser/Login
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                        //,new Claim("Roles", "admin")
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(60),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }


        [HttpPost]
        [Route("UpdateRegisteredUser")]
        public async Task<IActionResult> UpdateRegisteredUser(ApplicationUserModel body)
        {
            if (!UserExists(body.UserName))
            {
                return NotFound();
            }

            var user = await _userManager.FindByNameAsync(body.UserName);
            _context.AppUsers.Remove(user);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            user.BrojPasosa = body.BrojPasosa;
            user.BrojTelefona = body.BrojTelefona;
            user.Grad = body.Grad;
            user.Name = body.Name;
            user.Lastname = body.Lastname;
            _context.AppUsers.Add(user);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return NoContent();
        }

        private bool UserExists(string username)
        {
            return _context.AppUsers.Any(e => e.UserName == username);
        }
    }
}