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

        [HttpPut("{naziv}")]
        [Route("UpdateAviokompanijaProfil/{naziv}")]
        public async Task<IActionResult> UpdateAviokompanijaProfil(string naziv,Aviokompanija aviokompanija)
        {
             if(naziv != aviokompanija.Naziv)
             {
                return BadRequest();
             }

            _context.Entry(aviokompanija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!AviokompanijaExists(naziv))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpPost]
        [Route("AddAvioKompanija")]
        public async Task<ActionResult<Aviokompanija>> AddAvioKompanija(Aviokompanija aviokompanija)
        {
            if(!AviokompanijaExists(aviokompanija.Naziv))
            {
                _context.Aviokompanije.Add(aviokompanija);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetAvioKompanija", new { naziv = aviokompanija.Naziv }, aviokompanija);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("GetAvioKompanije")]
        public async Task<ActionResult<IEnumerable<Aviokompanija>>> GetAvioKompanije()
        {
            return await _context.Aviokompanije.ToListAsync();
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


        private bool AviokompanijaExists(string naziv)
        {
            return _context.Aviokompanije.Any(e => e.Naziv == naziv);
        }

        private bool LetExists(int id)
        {
            return _context.Letovi.Any(e => e.Id == id);
        }






    }
}