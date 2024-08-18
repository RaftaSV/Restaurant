import Title from "components/Atoms/Title";
import CardQR from "components/Molecules/CardQR/CardQR";
import Container from "components/Organisms/Container";
import Layout from "components/Organisms/Layout";

const Orders = () => {
  const qrCodeData = [
    { table_name: "1", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415759" },
    { table_name: "2", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415796" },
    { table_name: "3", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415753" },
    { table_name: "4", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415752" },
    { table_name: "5", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415761" },
    { table_name: "6", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415797" },
    { table_name: "7", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415760" },
    { table_name: "8", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415787" },
    { table_name: "9", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415788" },
    { table_name: "10", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415789" },
    { table_name: "11", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415786" },
    { table_name: "12", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415785" },
    { table_name: "B1", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415790" },
    { table_name: "B2", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415791" },
    { table_name: "PT1", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415793" },
    { table_name: "PT2", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415792" },
    { table_name: "PT3", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415794" },
    { table_name: "PT4", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1415795" },
    { table_name: "PARA COMER AQUI", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1442307" },
    { table_name: "PARA LLEVAR", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1442308" },
    { table_name: "DELIVERY", qr_code_url: "https://order.hrpos.heartland.us/new?locationId=2637658740&orderType=3&tableId=1442309" }
];
document.title='Ordenes';
return (
  
 <Layout>
<Title>Generar orden</Title>
  <Container widthDesktop={'200'} widthMobile={'150'} widthTablet={'200'}>
    {
      qrCodeData?.map(table => {
        const {table_name, qr_code_url} = table;
        return (
          <CardQR
          text={table_name}
          url={qr_code_url}
          />
        )
      })
    }
  </Container>

 </Layout>
)
}

export default Orders;
