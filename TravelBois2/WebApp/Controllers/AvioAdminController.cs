using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using WebApp.Data;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvioAdminController : ControllerBase
    {
        private UserManager<AvioAdmin> _userManager;
        private SignInManager<AvioAdmin> _signInManager;
        private readonly ApplicationSettings _appSettings;
        private readonly UserContext _context;

        public AvioAdminController(UserManager<AvioAdmin> userManager, SignInManager<AvioAdmin> signInManager, IOptions<ApplicationSettings> appSettings, UserContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        //POST: /api/AvioAdmin/Register
        public async Task<Object> PostAvioAdmin(AvioAdminModel body)
        {
            Console.WriteLine("post pozvan");
            var avioAdmin = new AvioAdmin()
            {
                UserName = body.UserName,
                Email = body.Email,
                Name = body.Name,
                Lastname = body.Lastname,
                Grad = body.Grad,
                NazivAviokompanije = body.NazivAviokompanije,
                BrojPasosa = body.BrojPasosa.ToString(),
                BrojTelefona = body.BrojTelefona.ToString(),
                PromenioPassword = false,
                TipKorisnika = body.TipKorisnika
            };
            try
            {
                var result = await _userManager.CreateAsync(avioAdmin, body.Password);
                if (result.Errors.Any())
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

        //[HttpGet]
        ////[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        ////[Authorize]
        //[Route("GetAvioAdminProfile")]
        ////GET: api/GetUserProfile
        //public async Task<Object> GetAvioAdminProfile()
        //{
        //    var claims = User.Claims;
        //    var ListClaims = claims.ToList();
        //    if (ListClaims.Count != 0)
        //    {
        //        var prvi = ListClaims.First();

        //        //string userId = User.Claims.First(c => c.Type == "UserID").Value;
        //        string userId = prvi.Value;
        //        var user = await _userManager.FindByIdAsync(userId);
        //        return new
        //        {
        //            user.NazivAviokompanije
        //        };
        //    }
        //    else
        //    {
        //        return "";
        //    }
        //}
    }
}