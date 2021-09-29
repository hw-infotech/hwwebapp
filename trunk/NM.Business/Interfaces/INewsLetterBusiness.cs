using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface INewsLetterBusiness
    {
        ResultModel<List<NewsLetterModel>> GetAllNewsLetter();
    }
}
