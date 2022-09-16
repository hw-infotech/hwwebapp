using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface INewsLetterBusiness
    {
        ResultModel<bool> SubscribeNewsLetter(NewsLetterModel newsLetterModel);
        ResultModel<bool> UnSubscribeByBsonId(string bsonId);
        ResultModel<List<NewsLetterModel>> GetAllNewsLetter();
        ResultModel<bool> SendNewsLetter(NewsLetterTemplateModel  newsLetterTemplateModel);
        ResultModel<List<NewsLetterModel>> GetAllSubscribers();
        ResultModel<List<NewsLetterModel>> GetAllUnSubscribers();
    }
}
