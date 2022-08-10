using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{

    public class Customers
    {
        public List<CustomersList> CustomersList { get; set; }
    }

    public class CustomersList
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string idNumber { get; set; }
        public Address address { get; set; }
        public List<ContractList> contractList { get; set; }
    }
    public class Address
    {
        public string city { get; set; }
        public string street { get; set; }
        public string number { get; set; }
        public string zipCode { get; set; }
    }
    public class ContractList
    {
        public string contractId { get; set; }
        public string contractName { get; set; }
        public List<PackagesList> packagesList { get; set; }
    }

    public class PackagesList
    {
        public int packageType { get; set; }
        public string packageName { get; set; }
        public int packageQuantity { get; set; }
        public int packageBalance { get; set; }
    }
}