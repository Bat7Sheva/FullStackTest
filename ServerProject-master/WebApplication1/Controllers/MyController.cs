using ClassLibrary1;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MyController : ControllerBase
    {
        MyService s = new MyService();

        [HttpGet("{ID}")]
        public CustomersList GetAccess(string ID)
        {
            return s.GetAccess(ID);
        }

        [HttpPost]
        public bool UpdateAddress(CustomersList updateStreets)
        {
            return s.UpdateAddress(updateStreets);
        }
    }
}