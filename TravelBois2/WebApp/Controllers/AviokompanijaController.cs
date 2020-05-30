using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
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

            return CreatedAtAction("GetAerodrom", new { grad = aerodrom.Grad }, aerodrom);
        }

        [HttpPost]
        [Route("AddLet")]
        public async Task<ActionResult<Let>> AddLet(Let let)
        {
            _context.Letovi.Add(let);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetLet", new { id = let.Id}, let);

        }

        [HttpGet]
        [Route("GetLetovi")]
        public async Task<ActionResult<IEnumerable<Let>>> GetLetovi()
        {
            return await _context.Letovi.ToListAsync();
        }

        [HttpGet]
        [Route("GetAerodromi")]
        public async Task<ActionResult<IEnumerable<Aerodrom>>> GetAerodromi()
        {
            return await _context.Aerodromi.ToListAsync();
        }

        [HttpDelete]
        [Route("DeleteAerodrom/{grad}")]
        public async Task<ActionResult<Aerodrom>> DeleteAerodrom(string grad)
        {
            var aerodrom = await _context.Aerodromi.FindAsync(grad);
            if (aerodrom == null)
            {
                return NotFound();
            }

            _context.Aerodromi.Remove(aerodrom);
            await _context.SaveChangesAsync();
            return aerodrom;
        }

        [HttpDelete]
        [Route("DeleteLet/{id}")]
        public async Task<ActionResult<Let>> DeleteLet(int id)
        {
            var let = await _context.Letovi.FindAsync(id);
            if (let == null)
            {
                return NotFound();
            }

            _context.Letovi.Remove(let);
            await _context.SaveChangesAsync();
            return let;
        }









    }
}