using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiTeste.Model;
using Microsoft.AspNetCore.Mvc;

namespace ApiTeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        RegistroOcorrencia[] registros = new RegistroOcorrencia[]
        {
            new RegistroOcorrencia { Id = 2,PacienteId=121},
            new RegistroOcorrencia { Id = 2,PacienteId=12 },
            new RegistroOcorrencia { Id = 3, PacienteId=13 },
            new RegistroOcorrencia { Id = 4,PacienteId=14  },
            new RegistroOcorrencia { Id = 5,PacienteId=150  }
        };
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<RegistroOcorrencia>> Get()
        {
            return registros;
        }


        // GET: api/<controller>
        [HttpGet("{id}")]
        public RegistroOcorrencia GetProdutoPorId(int id)
        {
            var registro = registros.FirstOrDefault(r => r.Id == id);
            return registro;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
