import  "bootstrap/dist/css/bootstrap.min.css"
async function getProducts(ProId) {
  const res = await fetch(`http://171.100.10.218:8081/api/inven/${ProId}`
    ,{method:"GET",
    });
    return res.json();
}
export default async function inven({params}) {
  const  data  =await getProducts(params.proid)
  let inven = {
       PRO_ID: '',
    COM_NAME: '',
    TYPE_NAME: '',
    BRAN: '',
    DEP_NAME: '',
    Invoice_Date: '',
    VENDOR_NAME: '',
    Price: '',
    Serial: '',
    Warranty: '',
    SPAC: '' 
  }

if(data[0]!==undefined)
  inven = data[0]
    return (  <div className="mw-100 d-flex justify-content-center">
      <div className="  m-1 w-75 ">
      <div className="row m-2  d-flex justify-content-center fw-bold">ข้อมูลเครื่อง</div>
  <div className="row m-1 border">
  <div className="col-sm-2 fw-bold">ชื่อสินค้า :</div>
  <div className="col-sm-auto ">{inven.PRO_ID}</div>
  </div>
  
  <div className="row m-1 border">
  <div className="col-sm-2 fw-bold">บริษัท :</div>
  <div className="col-sm-auto">{inven.COM_NAME}</div>
  </div>
  
  <div className="row m-1 border">
  <div className="col-sm-2 fw-bold">ชนิดสินค้า :</div>
  <div className="col-sm-auto">{inven.TYPE_NAME}</div>
  </div>
  
  <div className="row m-1 border">
  <div className="col-sm-2 fw-bold">ยี่ห้อ :</div>
  <div className="col-sm-auto">{inven.BRAN}</div>
  </div>
  <div className="row m-1 border">
  <div className="col-sm-2 fw-bold">แผนก :</div>
  <div className="col-sm-auto">{inven.DEP_NAME}</div>
  </div>
  <div className="row m-1 border">
  <div className="col-sm-2 fw-bold">วันที่ชื้อสินค้า :</div>
  <div className="col-sm-auto">{inven.Invoice_Date}</div>
  </div>
  <div className="row m-1 border">
  <div className=" col-sm-2 fw-bold">บริษัทที่ซื้อสินค้า :</div>
  <div className=" col-sm-auto">{inven.VENDOR_NAME}</div>
  </div>
  <div className="row m-1 border">
  <div className=" col-sm-2 fw-bold">ราคา :</div>
  <div className=" col-sm-auto">{inven.Price} บาท</div>
  </div>
  <div className="row m-1 border">
  <div className=" col-sm-2 fw-bold">ประกัน :</div>
  <div className=" col-sm-auto">{inven.Warranty} ปี</div>
  </div>
  <div className="row m-1 border">
  <div className=" col-sm-2 fw-bold">สเปค :</div>
  <div className=" col-sm-auto">{inven.SPAC} ปี</div>
  </div>
  
  </div>
  </div> )
  }