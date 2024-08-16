﻿using PerformancePrototypeV2.API.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PerformancePrototypeV2.API.DAL.Repositories
{
    public interface ITransactionRepository : IRepository<TransactionDetail>
    {
        Task<int> GetTotalRecordCount();
        Task<List<TransactionDetail>> GetPagedTransactionData(int pageSize, int skipRecordCount);
        Task<List<TransactionDetail>> GetPagedTransactionData(int pageSize, int skipRecordCount,string sortfield,string sortorder);

    }
}
