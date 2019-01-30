import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';

class App extends Component {
  render() {
    const namaBarang = [
      {
        id: 1,
        namaProduk: 'Iphone 6 Plus',
        harga: '15.000.000',
        img: "https://cdn.ndtv.com/tech/images/gadgets/iphone5-vs-4S-new.jpg",
        status: true
      },
      {
        id: 2,
        namaProduk: 'Samsung j7',
        harga: '12.000.000',
        img: "https://i.gadgets360cdn.com/products/large/1526892165_635_Samsung_Galaxy_J6.jpg",
        status: false
      },
      {
        id: 3,
        namaProduk: 'Oppo Smart',
        harga: '10.000.000',
        img: "https://i.gadgets360cdn.com/products/large/1530947258_635_oppo_a5.jpg",
        status: true
      },
    ];

    const elements = namaBarang.map((barang, index) => {
      let result = '';
      if (barang.status) { /* JIKA status bernilai TRUE, MAKA TAMPILKAN Products yang dimasukan ke let result  */
        /* BISA LANGSUNG SEPERTI INI*/
        // result = <Products
        //           key={barang.id}
        //           namaProduk={barang.namaProduk}
        //           harga={barang.harga}
        //           img={barang.img}
        //           status={barang.status}
        //           />

        /* ATAU LEBIH RINGKAS SAAT PEMANGGILAN PROPS DI ELEMENT NYA SEPERTI INI */
        result = <Products  key={index}
                itemData={{
                          key: barang.id,
                          namaProduk: barang.namaProduk,
                          harga: barang.harga,
                          img: barang.img,
                          status: barang.status,
                        }}
                          />
        }
      return result; /* JIKA status bernilai FALSE MAKA Products yang bernilai FALSE tidak ditampilkan*/
    });
    
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Lesson PROPS</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
