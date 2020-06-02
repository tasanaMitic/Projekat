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
    public class RentAdminController : ControllerBase
    {
        private UserManager<RentAdmin> _userManager;
        private SignInManager<RentAdmin> _signInManager;
        private readonly ApplicationSettings _appSettings;

        public RentAdminController(UserManager<RentAdmin> userManager, SignInManager<RentAdmin> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<object> RegisterAvioAdmin(RentAdmin model)
        {
            Console.WriteLine("avio admin register pozvan");
            var avioAdmin = new RentAdmin()
            {
                Email = model.Email,
                Username = model.Username,
                Ime = model.Ime,
                Prezime = model.Prezime,
                Grad = model.Grad,
                NazivRente = model.NazivRente,
                BrojTelefona = model.BrojTelefona,
                BrojPasosa = model.BrojPasosa,
                PromenioPassword = false
            };
            try
            {
                var result = await _userManager.CreateAsync(avioAdmin, model.Password);
                return Ok(result);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}