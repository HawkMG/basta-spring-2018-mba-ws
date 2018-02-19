using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SessionsApi
{
    [Route("api/[controller]")]
    public class SessionsController : Controller
    {
        private static ConcurrentDictionary<Guid, Session> _database;


        static SessionsController()
        {
            _database = new ConcurrentDictionary<Guid, Session>();
            var guid = Guid.NewGuid();
            var session = new Session
            {
                Id = guid,
                Title = "EF Core rocks!!!",
                Abstract = "#not"
            };

            _database.TryAdd(guid, session);
        }

        [HttpGet]
        [Route("")]
        public List<Session> GetSessions()
        {
            return _database.Values.ToList();
        }

        /// <summary>
        /// TODO!
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetSession(Guid id) // TODO: use SessionDetail
        {
            // TODO: Validate ID
            // TODO: Exception handling & logging ;-)

            Session returnValue;

            if (_database.TryGetValue(id, out returnValue))
            {
                return Ok(returnValue);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("")]
        public Session AddSession([FromBody] Session session)
        {
            // ModelState.ValidationState...

            var guid = Guid.NewGuid();
            session.Id = guid;

            _database.TryAdd(guid, session);

            return session;
        }
    }
}
