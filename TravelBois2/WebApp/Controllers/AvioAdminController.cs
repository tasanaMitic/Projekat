using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
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

        public AvioAdminController(UserManager<AvioAdmin> userManager, SignInManager<AvioAdmin> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<object> PostAvioAdmin(AvioAdminModel body)
        {
            Console.WriteLine("avio admin register pozvan");
            var avioAdmin = new AvioAdmin()
            {
                Email = body.Email,
                UserName = body.UserName,
                Name = body.Name,
                Lastname = body.Lastname,
                Grad = body.Grad,
                AvioKompanijaID = body.AvioKompanijaID,
                BrojTelefona = body.BrojTelefona,
                BrojPasosa = body.BrojPasosa,
                PromenioPassword = false
            };
            try
            {
                var result = await _userManager.CreateAsync(avioAdmin, body.Password);
                return Ok(result);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}