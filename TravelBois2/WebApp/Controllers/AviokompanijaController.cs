using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Data;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AviokompanijaController : ControllerBase
    {
        private readonly AviokompanijaContext _context;

        public AviokompanijaController(AviokompanijaContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Route("AddAerodrom")]
        public async Task<ActionResult<Aerodrom>> AddAerodrom(Aerodrom aerodrom)
        {
            _context.Aerodromi.Add(aerodrom);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAerodrom", new { grad = aerodrom.Grad}, aerodrom);
        }

        [HttpGet]
        [Route("GetAerodromi")]
        public async Task<ActionResult<IEnumerable<Aerodrom>>> GetAerodromi()
        {
            return await _context.Aerodromi.ToListAsync();
        }






    }
}