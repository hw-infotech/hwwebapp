using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class Client: Entity
    {
        public string Name { get; private set; }
        public string Designation { get; private set; }
        public string Feedback { get; private set; }
        public string ImageURL { get; private set; }
        public string VideoURL { get; private set; }
        public Client(string name, string designation, string feedback, string imageURL, string videoURL)
        {
            this.Name = name;
            this.Designation = designation;
            this.Feedback = feedback;
            this.ImageURL = imageURL;
            this.VideoURL = videoURL;

        }
    }
}
