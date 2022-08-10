using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ClassLibrary1
{
    public class MyService
    {
        const string customerjsonDataPath = "CustomersJson.json";

        public CustomersList GetAccess(string ID)
        {
            var customers = GetCustomersData();
            if (customers.CustomersList.Any(x => x.idNumber == ID))
            {
                CustomersList customer = customers.CustomersList.Where(x => x.idNumber == ID).First();
                return customer;
            }
            else
                return new CustomersList();
        }

        public Customers GetCustomersData()
        {
            var json = File.ReadAllText(customerjsonDataPath);
            var customerList = JsonConvert.DeserializeObject<Customers>(json);
            return customerList;
        }

        public bool UpdateAddress(CustomersList updateAddress)
        {
            try
            {
                Customers customerData = GetCustomersData();
                customerData.CustomersList.Find(x => x.idNumber == updateAddress.idNumber).address = updateAddress.address;
                string output = JsonConvert.SerializeObject(customerData, Formatting.Indented);
                File.WriteAllText(customerjsonDataPath, output);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
