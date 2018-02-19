using System;

namespace SessionsApi
{
    public class Session
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
    }

    public class SessionDetail
    {
        // Id
        // Title
        // Abstract
        // public List<Speaker> Speakers { get; set; }
        // public string Room...

    }
}