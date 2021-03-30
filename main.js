(function() {

    // ****************************************************************************************************
    // ****************************************************************************************************
    /*


    OBJECTIFS : 

    - afficher une liste de produits
    - le tout bien stylé


    
    */
    // ****************************************************************************************************
    // ****************************************************************************************************

    var data = {
        products: {
            parts: [
                {
                    id: 'tn1',
                    label: 'tshirt',
                    brand: 'Nike',
                    img: 'https://mosaic01.ztat.net/vgs/media/pdp-zoom/N1/24/2D/0E/JK/12/N1242D0EJ-K12@21.jpg',
                    price: '12.99'
                },
                {
                    id: 'ba2',
                    label: 'basket',
                    brand: 'Adidas',
                    img: 'https://mosaic01.ztat.net/vgs/media/pdp-zoom/AD/11/2B/0L/KA/11/AD112B0LK-A11@12.jpg',
                    price: '79.99'
                },
                {
                    id: 'jr3',
                    label: 'jean',
                    brand: 'Replay',
                    img: 'https://mosaic02.ztat.net/vgs/media/catalog-lg/RE/32/2G/06/BK/11/RE322G06B-K11@9.jpg',
                    price: '129.99'
                }
            ]
        },
        infos: {
            'tn1': {
                discount: 50,
                discount_type: 'soldes'                
            },
            'jr3': {
                discount: 25,
                discount_type: 'fin de s&eacute;rie'                
            },
        }
    };

    let recup = function (objet) {
        let main = document.getElementById('main');
        let div = document.createElement('div');
        div.className = 'block';
        main.appendChild(div);
        let id = document.createElement('h2');
        div.appendChild(id);
        let label = document.createElement('p');
        label.className = 'label';
        div.appendChild(label);
        let brand = document.createElement('p');
        brand.className= 'brand';
        div.appendChild(brand);
        let img = document.createElement('img');
        div.appendChild(img);
        let price = document.createElement('p');
        price.className = 'price';
        div.appendChild(price);
        id.innerHTML = objet.id;
        label.innerHTML = objet.label;
        brand.innerHTML = objet.brand;
        img.src = objet.img;
        price.innerHTML = objet.price;
    }

    let products = function () {
        let main = document.querySelector('#main');
    
        data.products.parts.forEach(e => {
            recup(e)
            
        });
    }
    
     products();

    //  var result = data.products.parts.find(p => p.id == data.infos[p.id]);
    
        // console.log(data.infos['tn1'].toString()) 


    return;

})();


