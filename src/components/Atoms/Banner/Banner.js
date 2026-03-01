import {
  StyleImageBanner,
  StyleSocialNetwork,
  StyleSocialPhone,
  StyleViewMenu,
  StyleWrapper,

  StyleMenuSection,
  StyleMenuSectionTitle,
  StyleMenuGrid,
  StyleMenuCard,
  StyleMenuCardFull,
  StyleMenuImage,
  StyleMenuBottom,
  StyleMenuTopRow,
  StyleMenuLeft,
  StyleMenuBadgeNumber,
  StyleMenuTitleWrap,
  StyleMenuTitle,
  StyleMenuSubtitle,
  StyleMenuPrice,
  StyleMenuLists,
  StyleMenuList,
  StyleMenuDivider, // o StyleMenuFullDivider si así se llama en style.js
} from './style';

import { StyleMenuDividerSizes } from "./style";


import {
  StyleMenuSizes,
  StyleMenuSizeRow,
  StyleMenuSizeLabel,
  StyleMenuSizePrice,
} from "./style";

import React, { useEffect, useRef, useState } from "react";



import { StyleMenuFullDivider } from './style';





import LogoBanner from 'components/Images/App/logo.png'
import {useTranslation} from 'react-i18next';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Facebook from 'components/Atoms/Icons/Facebook';
import Instagram from 'components/Atoms/Icons/Instagram';
import Tiktok from 'components/Atoms/Icons/Tiktok';
import WhatsApp from '../Icons/WhatsApp';
import Maps from '../Icons/Maps';
import Container from '../../Organisms/Container';
import Telephone from '../Icons/Phone';

///// DESAYUNOS 
import DESAYUNO1 from 'components/Images/App/DESAYUNO1.png';
import DESAYUNO2 from 'components/Images/App/DESAYUNO2.png';
import DESAYUNO3 from 'components/Images/App/DESAYUNO3.png';
import DESAYUNO4 from 'components/Images/App/DESAYUNO4.png';
import DESAYUNO5 from 'components/Images/App/DESAYUNO5.png';
import DESAYUNO6 from 'components/Images/App/DESAYUNO6.png';
import DESAYUNO7 from 'components/Images/App/DESAYUNO7.png';
import DESAYUNO8 from 'components/Images/App/DESAYUNO8.png';

/////TIPICOS
import TIPICO9 from 'components/Images/App/TIPICO9.png';
import TIPICO10 from 'components/Images/App/TIPICO10.png';
import MADUROS11 from 'components/Images/App/MADUROS11.png';
import CANOA12 from 'components/Images/App/CANOA12.png';
import TACOS_FRITOS from "components/Images/App/TACOS_FRITOS.png";
import TORTILLA_QUESILLO from "components/Images/App/TORTILLA_QUESILLO.png";
import PICADA from "components/Images/App/PICADA.png";
import BALEADAS from "components/Images/App/BALEADAS.png";
import PUPUSAS from "components/Images/App/PUPUSAS.png";


//////MEXICANOS
import TACOS_MEXICANOS from "components/Images/App/TACOS_MEXICANOS.png";

import ENCHILADAS from "components/Images/App/ENCHILADAS.png";





////IMPORT KIDS MENU IMAGENES
import KIDS1 from 'components/Images/App/KIDS1.png';
import KIDS2 from 'components/Images/App/KIDS2.png';
import KIDS3 from 'components/Images/App/KIDS1.png';
import KIDS4 from 'components/Images/App/KIDS1.png';
import KIDS5 from 'components/Images/App/KIDS1.png';




const Banner = () => {


const openViewer = (src) => {
  setViewerSrc(src);
  setViewerOpen(true);
};

const closeViewer = () => {
  setViewerOpen(false);
  setViewerSrc("");
};


const {t} = useTranslation();
const welcome = t('Welcome');
const Address = t('Address');
const Phone = t('Phone');
const seeMenu = t('seeMenu');
const orderHere = t('order');
const normalize = (p) => String(p).replace("$", "").trim();

const [viewerOpen, setViewerOpen] = useState(false);
const [viewerSrc, setViewerSrc] = useState("");





const [scale, setScale] = useState(1);
const [pos, setPos] = useState({ x: 0, y: 0 });
const dragRef = useRef({ dragging: false, startX: 0, startY: 0, baseX: 0, baseY: 0 });





useEffect(() => {
  const onKeyDown = (e) => {
    if (e.key === "Escape") closeViewer();
  };
  if (viewerOpen) window.addEventListener("keydown", onKeyDown);
  return () => window.removeEventListener("keydown", onKeyDown);
}, [viewerOpen]);

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const onWheelZoom = (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  setScale((s) => clamp(Number((s + delta).toFixed(2)), 1, 3));
};

const onMouseDown = (e) => {
  dragRef.current.dragging = true;
  dragRef.current.startX = e.clientX;
  dragRef.current.startY = e.clientY;
  dragRef.current.baseX = pos.x;
  dragRef.current.baseY = pos.y;
};

const onMouseMove = (e) => {
  if (!dragRef.current.dragging) return;
  const dx = e.clientX - dragRef.current.startX;
  const dy = e.clientY - dragRef.current.startY;
  setPos({ x: dragRef.current.baseX + dx, y: dragRef.current.baseY + dy });
};

const onMouseUp = () => {
  dragRef.current.dragging = false;
};

const zoomIn = () => setScale((s) => clamp(Number((s + 0.2).toFixed(2)), 1, 3));
const zoomOut = () => setScale((s) => clamp(Number((s - 0.2).toFixed(2)), 1, 3));
const resetZoom = () => { setScale(1); setPos({ x: 0, y: 0 }); };




  const redirectTo = (Site) => {
    if(Site === 'Facebook'){
    window.location = 'https://www.facebook.com/100083842727240';
  }else if(Site=== 'Instagram'){
      window.location = 'https://www.instagram.com/rositasrestaurantnj';
    }else if(Site === 'Vermenu'){
      window.location = 'https://rositas-restaurant-08822.my.canva.site/rosita-s-restaurant-menu';
    }else if(Site === 'WhatsApp'){
      window.location = 'https://wa.me/message/3B3DKG6SX4E6C1';
    } else if(Site === 'Tiktok'){
      window.location = 'https://www.tiktok.com/@rositasrestaurantnj';
    } else if(Site === 'order') {
window.location = 'https://rositasrestaurant.hrpos.heartland.us/menu';
}else if(Site === 'Maps') {
window.location = 'https://maps.app.goo.gl/KUkerCaXq99qNZzP6';
}

  }

const dishes = [
  { 
    id: 1,
    title: 'Desayuno 1 / Breakfast 1',
    price: '$18.00',
    image: DESAYUNO1,
    es: ['Frijoles', 'Crema', 'Aguacate', 'Queso', 'Maduros', 'Huevos', '2 Tortillas', 'Chorizo'],
    en: ['Beans', 'Sour cream', 'Avocado', 'Cheese', 'Sweet Plantains', 'Scrambled Eggs', '2 Tortillas', 'Sausage'],
  },
  {
    id: 2,
    title: 'Desayuno 2 / Breakfast 2',
    price: '$18.00',
    image: DESAYUNO2,
    es: ['Maduros', 'Crema', 'Queso', 'Aguacate', 'Huevos revueltos', 'Pinto', '2 Tortillas', 'Salami'],
    en: ['Sweet Plantains', 'Sour cream', 'Cheese', 'Avocado', 'Scrambled eggs', 'Congri', '2 Tortillas', 'Salami'],
  },
  {
    id: 3,
    title: 'Desayuno 3 / Breakfast 3',
    price: '$19.00',
    image: DESAYUNO3,
    es: ['Frijoles', 'Queso', 'Crema', 'Aguacate', 'Carne de res', '2 Tortillas', 'Huevos revueltos'],
    en: ['Beans', 'Cheese', 'Sour cream', 'Avocado', 'Grilled Steak', '2 Tortillas', 'Scrambled eggs'],
  },
  {
    id: 4,
    title: 'Desayuno 4 / Breakfast 4',
    price: '$16.00',
    image: DESAYUNO4,
    es: ['Maduros', 'Huevos en salsa', 'Aguacate', 'Crema', 'Queso', 'Pinto', '2 Tortillas'],
    en: ['Sweet Plantains', 'Eggs with tomato sauce', 'Avocado', 'Sour cream', 'Cheese', 'Congri', '2 Tortillas'],
  },
  {
    id: 5,
    title: 'Desayuno 5 / Breakfast 5',
    price: '$16.00',
    image: DESAYUNO5,
    es: ['Maduros', 'Huevos con chorizo', 'Aguacate', 'Crema', 'Queso', '2 Tortillas'],
    en: ['Sweet Plantains', 'Eggs with sausage', 'Avocado', 'Sour cream', 'Cheese', '2 Tortillas'],
  },
  {
    id: 6,
    title: 'Desayuno 6 / Breakfast 6',
    price: '$11.00',
    image: DESAYUNO6,
    es: ['Frijoles', 'Crema', 'Maduros'],
    en: ['Beans', 'Sour cream', 'Fried plantain'],
  },
  {
  id: 7,
  title: 'Desayuno Catracho / Catracho Breakfast',
  price: '$25.00',
  image: DESAYUNO7,
  es: ['Tajadas', 'Maduros', 'Chorizo', 'Carne de res', 'Huevos revueltos', 'Aguacate', 'Crema', 'Queso'],
  en: ['Green banana slices', 'Fried plantain', 'Sausage', 'Grilled steak', 'Scrambled eggs', 'Avocado', 'Sour cream', 'Cheese'],
},
{
  id: 8,
  title: 'Desayuno Bacon / Bacon Breakfast',
  price: '$18.00',
  image: DESAYUNO8,
  es: ['Tocino', 'Frijoles', 'Maduros', 'Huevos revueltos', 'Queso', 'Crema', 'Aguacate', '2 Tortillas'],
  en: ['Bacon', 'Beans', 'Fried plantain', 'Scrambled eggs', 'Cheese', 'Sour cream', 'Avocado', '2 Tortillas'],
},
];

const platosTipicos = [
  {
    id: 9,
    title: 'Bandeja Típica Hondureña / Honduran Traditional Platter',
    price: '$25.00',
    image: TIPICO9,
    es: ['Tamal de elote', 'Maduros', 'Aguacate', 'Arroz', 'Frijoles', 'Carne asada', '1 Baleada sencilla'],
    en: ['Corn tamale', 'Sweet Plantains', 'Avocado', 'Rice', 'Beans', 'Grilled Steak', '1 Simple baleada'],
  },
  {
    id: 10,
    title: 'Bandeja Típica Salvadoreña / Salvadoran Traditional Platter',
    price: '$27.00',
    image: TIPICO10,
    es: ['Tamal de elote', 'Maduros', 'Aguacate', 'Arroz', 'Frijoles', 'Carne asada', '1 Pupusa'],
    en: ['Corn tamale', 'Sweet Plantains', 'Avocado', 'Rice', 'Beans', 'Grilled Steak', '1 Pupusa'],
  },
  {
    id: 11,
    title: 'Maduros / Sweet Plantain',
    subtitle: 'Pequeña $4.00 / Mediana $8.00',
    price: 'From $4.00',
    image: MADUROS11,
    es: ['Pequeña: $4.00', 'Mediana: $8.00'],
    en: ['Small: $4.00', 'Medium: $8.00'],
  },
  {
    id: 12,
    title: 'Canoa / Sweet Plantains Canoe',
    price: '$5.00',
    image: CANOA12,
    es: ['Plátano frito', 'Rellena de frijoles refritos', 'Crema', 'Queso rallado'],
    en: ['Fried plantain', 'Stuffed with refried beans', 'Sour cream', 'Shredded cheese'],
  },

  {
    id: 13,
    title: "Tacos Fritos / Fried Tacos",
    price: "$15.00",
    image: TACOS_FRITOS,
    es: ["Lechuga", "Repollo"],
    en: ["Lettuce", "Cabbage"],
    description_es:
      "Crujiente flauta rellena de pollo sazonado, servida con aderezo y ensalada de lechuga fresca o repollo.",
    description_en:
      "Crispy flauta filled with seasoned chicken, served with dressing and fresh lettuce or cabbage salad.",
  },

  {
    id: 14,
    title: "Tortilla con Quesillo / Tortilla with Cheese",
    price: "$17.00",
    image: TORTILLA_QUESILLO,
    es: ["3 Tortillas", "Queso", "Salsa de tomate"],
    en: ["3 Tortillas", "Cheese", "Tomato sauce"],
  },

  
  
];

const appetizers = [
 

  {
    id: 15,
    title: "Picada / Appetizer",
    image: PICADA,
    sizes: [
      { label: "Pequeña / Small", price: "25.00" },
      { label: "Mediana / Medium", price: "38.00" },
      { label: "Grande / Large", price: "75.00" },
    ],
    es: ["Alitas", "Yuca", "Tostones", "Chicharrones"],
    en: ["Wings", "Cassava", "Fried green plantain slices", "Pork rind"],
  },
];



const baleadas = [
  {
    id: 16,
    title: "Baleadas",
    basePrice: "$4.00",
    extraPrice: "+ $1.00 c/u",
    image: BALEADAS,

    base_es: [
      "Tortilla de harina",
      "Frijoles",
      "Queso rallado",
      "Crema",
    ],

    base_en: [
      "Flour tortilla",
      "Beans",
      "Grated cheese",
      "Sour cream",
    ],

    extras_es: [
      "Huevos",
      "Pollo",
      "Carne de Res",
      "Chorizo",
      "Maduro",
      "Lomo de Cerdo",
    ],

    extras_en: [
      "Eggs",
      "Chicken",
      "Beef",
      "Sausage",
      "Fried plantain",
      "Pork",
    ],

    avocado: "$0.25 + aguacate / avocado",
  },
];
const pupusas = [
  {
    id: 17,
    title: "Pupusas",
    image: PUPUSAS,

    items: [
      { es: "Pollo con queso", en: "Chicken with cheese", price: "$5.00" },
      { es: "Ayote con queso", en: "Zucchini with cheese", price: "$4.00" },
      { es: "Queso con loroco", en: "Cheese with loroco", price: "$3.50" },
      { es: "Frijol y queso", en: "Beans and cheese", price: "$3.00" },
      { es: "Queso", en: "Cheese", price: "$3.00" },
      { es: "Chicharrón con queso", en: "Pork rinds with cheese", price: "$3.00" },
      { es: "Jalapeño con queso", en: "Jalapeno with cheese", price: "$3.00" },
      {
        es: "Revueltas (chicharrón, frijol y queso)",
        en: "Mixed (pork rinds, beans and cheese)",
        price: "$4.00",
      },
      { es: "Pupusa LOCA", en: "Crazy pupusa", price: "$12.00" },
    ],

    riceFlour: "Pupusas de harina de arroz $5.00 / Rice flour pupusas $5.00",
  },
];



const kids = [
  
 {
    id: 5,
    title: "Chicken Tenders",
    subtitle: "Menú Infantil / Kids Menu",
    price: "$13.00",
    image: KIDS1,
    es: ["Tiras de pollo", "Papas fritas", "Salsa"],
    en: ["Chicken tenders", "French fries", "Sauce"],
  },
  {
    id: 6,
    title: "Chicken Nuggets",
    subtitle: "Menú Infantil / Kids Menu",
    price: "$13.00",
    image: KIDS2,
    es: ["Nuggets de pollo", "Papas fritas"],
    en: ["Chicken nuggets", "French fries"],
  },
  {
    id: 7,
    title: "Beef Burger",
    subtitle: "Menú Infantil / Kids Menu",
    price: "$13.00",
    image: KIDS3,
    es: ["Hamburguesa de res", "Papas fritas"],
    en: ["Beef burger", "French fries"],
  },
  {
    id: 8,
    title: "Mozzarella Sticks",
    subtitle: "Menú Infantil / Kids Menu",
    price: "$13.00",
    image: KIDS4,
    es: ["Palitos de mozzarella", "Papas fritas"],
    en: ["Mozzarella sticks", "French fries"],
  },
  {
    id: 9,
    title: "Salchipapa",
    subtitle: "Menú Infantil / Kids Menu",
    price: "$13.00",
    image: KIDS5,
    es: ["Salchicha", "Papas fritas"],
    en: ["Sausage", "French fries"],
  },

];

const btnStyle = {
  background: "rgba(255,255,255,.08)",
  color: "rgba(255,255,255,.9)",
  border: "1px solid rgba(255,255,255,.15)",
  padding: "8px 10px",
  borderRadius: 10,
  fontWeight: 800,
  cursor: "pointer",
};





  return(

    

    

    <StyleWrapper id="Inicio" style={{ paddingTop: "-40px" }}>


     <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
  <Title size={40}>{welcome}</Title>
  <StyleImageBanner loading="lazy" src={LogoBanner}/>
  <Title size={20}>{Address}</Title>
  <Title size={20}>{Phone}</Title>
</div>
      <StyleViewMenu>
      <Button onClick={() => redirectTo('Vermenu') } color={'button'}> <Title size={20}>{seeMenu}</Title></Button>
      </StyleViewMenu>
      <StyleViewMenu>
<Button onClick={() => redirectTo('order') } color={'button'}> <Title size={20}>{orderHere}</Title></Button>


     </StyleViewMenu>
      <Container widthTablet={'70'} widthMobile={'70'} widthDesktop={'70'}>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Facebook')} color={'transparent'}><Facebook/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Instagram')} color={'transparent'}><Instagram/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('WhatsApp')} color={'transparent'}><WhatsApp/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Tiktok')} color={'transparent'}><Tiktok/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Maps')} color={'transparent'}> <Maps/></Button>
        </StyleSocialNetwork>
        <StyleSocialPhone>
          <Button
            onClick={()=>{
              window.location.href='tel:+9088247582';
            }}
            color={'transparent'}> <Telephone/></Button>
        </StyleSocialPhone>
      </Container>


<StyleMenuSection id="Desayunos">
  <StyleMenuSectionTitle>
  Desayunos / Breakfast
</StyleMenuSectionTitle>
<StyleMenuFullDivider />
 <StyleMenuGrid>
    {dishes.map((dish) => (
      <StyleMenuCard key={dish.id}>
        <StyleMenuImage
  src={dish.image}
  alt={dish.title}
  onClick={() => openViewer(dish.image)}
  style={{ cursor: "zoom-in" }}
/>

        <StyleMenuBottom>
          <StyleMenuTopRow>
            <StyleMenuLeft>
              <StyleMenuBadgeNumber>{dish.id}</StyleMenuBadgeNumber>

              <StyleMenuTitleWrap>
                <StyleMenuTitle>{dish.title}</StyleMenuTitle>
                <StyleMenuSubtitle>{dish.subtitle}</StyleMenuSubtitle>
              </StyleMenuTitleWrap>
            </StyleMenuLeft>

            <StyleMenuPrice>{dish.price}</StyleMenuPrice>
          </StyleMenuTopRow>

          <StyleMenuLists>
            <StyleMenuList>
              {dish.es.map((item) => <li key={item}>{item}</li>)}
            </StyleMenuList>

            <StyleMenuList>
              {dish.en.map((item) => <li key={item}>{item}</li>)}
            </StyleMenuList>
          </StyleMenuLists>
        </StyleMenuBottom>
      </StyleMenuCard>
    ))}
  </StyleMenuGrid>
</StyleMenuSection>



<StyleMenuSection id="tipicos">
  <StyleMenuSectionTitle>
    Platos Típicos / Traditional Dishes
  </StyleMenuSectionTitle>

  <StyleMenuFullDivider />

  <StyleMenuGrid>
    {platosTipicos.map((dish) => (
      <StyleMenuCard key={dish.id}>
        <StyleMenuImage
  src={dish.image}
  alt={dish.title}
  onClick={() => openViewer(dish.image)}
  style={{ cursor: "zoom-in" }}
/>

        <StyleMenuBottom>
          <StyleMenuTopRow>
            <StyleMenuLeft>
              <StyleMenuBadgeNumber>{dish.id}</StyleMenuBadgeNumber>

              <StyleMenuTitleWrap>
                <StyleMenuTitle>{dish.title}</StyleMenuTitle>
              </StyleMenuTitleWrap>
            </StyleMenuLeft>

            {dish.price && (
              <StyleMenuPrice>{dish.price}</StyleMenuPrice>
            )}
          </StyleMenuTopRow>

          {/* tamaños especiales */}
          {dish.sizes && (
            <StyleMenuLists>
              {dish.sizes.map((s) => (
                <li key={s.label}>
                  {s.label} — {s.price}
                </li>
              ))}
            </StyleMenuLists>
            
          )}

          <StyleMenuLists>
            <StyleMenuList>
              {dish.es.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </StyleMenuList>

            <StyleMenuList>
              {dish.en.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </StyleMenuList>
          </StyleMenuLists>

          {dish.description_es && (
            <>
              <p>{dish.description_es}</p>
              <p>{dish.description_en}</p>
            </>
          )}
        </StyleMenuBottom>
      </StyleMenuCard>
    ))}
  </StyleMenuGrid>
</StyleMenuSection>



<StyleMenuSection id="appetizers">
  <StyleMenuSectionTitle>
    PICADA / APPETIZERS
  </StyleMenuSectionTitle>

  <StyleMenuFullDivider />

  <StyleMenuGrid>
    {appetizers.map((dish) => (
      <StyleMenuCardFull  key={dish.id}>
        <StyleMenuImage
  src={dish.image}
  alt={dish.title}
  onClick={() => openViewer(dish.image)}
  style={{ cursor: "zoom-in" }}
/>

        <StyleMenuBottom>
          <StyleMenuTopRow>
            <StyleMenuLeft>
              <StyleMenuBadgeNumber>{dish.id}</StyleMenuBadgeNumber>

              <StyleMenuTitleWrap>
                <StyleMenuTitle>{dish.title}</StyleMenuTitle>
              </StyleMenuTitleWrap>
            </StyleMenuLeft>

            {dish.price && (
              <StyleMenuPrice>{dish.price}</StyleMenuPrice>
            )}
            
          </StyleMenuTopRow>

          {/* tamaños especiales */}
          {dish.sizes && (
            <StyleMenuSizes>
    {dish.sizes.map((s) => (
      <StyleMenuSizeRow key={s.label}>
        <StyleMenuSizeLabel>{s.label}</StyleMenuSizeLabel>
        <StyleMenuSizePrice>
  {normalize(s.price)} $
</StyleMenuSizePrice>
      </StyleMenuSizeRow>
    ))}
  </StyleMenuSizes>
          )}
           <StyleMenuDividerSizes />

          <StyleMenuLists>
            <StyleMenuList>
              {dish.es.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </StyleMenuList>

            <StyleMenuList>
              {dish.en.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </StyleMenuList>
          </StyleMenuLists>

          {dish.description_es && (
            <>
              <p>{dish.description_es}</p>
              <p>{dish.description_en}</p>
            </>
          )}
        </StyleMenuBottom>
      </StyleMenuCardFull>
    ))}
  </StyleMenuGrid>
</StyleMenuSection>



<StyleMenuSection id="baleadas">
  <StyleMenuSectionTitle>BALEADAS</StyleMenuSectionTitle>

  <StyleMenuFullDivider />

  {baleadas.map((item) => ( 
    <StyleMenuCard key={item.id}>
      <StyleMenuImage src={item.image} onClick={() => openViewer(item.image)} style={{ cursor: "zoom-in" }} />


      <StyleMenuBottom>
        <StyleMenuTitle>{item.title}</StyleMenuTitle>

        <StyleMenuPrice>{item.basePrice}</StyleMenuPrice>
        

        <StyleMenuLists>
          <StyleMenuList>
            {item.base_es.map((i) => <li key={i}>{i}</li>)}
          </StyleMenuList>

          <StyleMenuList>
            {item.base_en.map((i) => <li key={i}>{i}</li>)}
          </StyleMenuList>
        </StyleMenuLists>

        <StyleMenuDividerSizes />
        {/* 🔥 PRECIO EXTRA AQUÍ */}
<div style={{
  textAlign: "center",
  fontWeight: 700,
  color: "#d78305",
  margin: "10px 0"
}}>
  {item.extraPrice}
</div>{/* LISTA EXTRAS */}
<StyleMenuLists>


  <StyleMenuList>
    {item.extras_es.map((i) => <li key={i}>{i}</li>)}
  </StyleMenuList>

  <StyleMenuList>
    {item.extras_en.map((i) => <li key={i}>{i}</li>)}
  </StyleMenuList>
</StyleMenuLists>

<div style={{
  textAlign: "center",
  fontWeight: 700,
  color: "#d78305",
  margin: "10px 0"
}}>
  {item.avocado}
</div>{/* LISTA EXTRAS */}

<p style={{textAlign:"center"}}>

        
        </p>
      </StyleMenuBottom>
    </StyleMenuCard>
  ))}
</StyleMenuSection>

<StyleMenuSection id="pupusas">
  <StyleMenuSectionTitle>PUPUSAS</StyleMenuSectionTitle>
  <StyleMenuFullDivider />

  {pupusas.map((menu) => (
    <StyleMenuCard key={menu.id}>
      <StyleMenuImage
        src={menu.image}
        alt={menu.title}
        onClick={() => openViewer(menu.image)}
        style={{ cursor: "zoom-in" }}
      />

      <StyleMenuBottom>
        <StyleMenuTitle>{menu.title}</StyleMenuTitle>

        <ul style={{ textAlign: "left" }}>
          {menu.items.map((p, index) => (
            <li key={index}>
              {p.es} / {p.en} — {p.price}
            </li>
          ))}
        </ul>

        <StyleMenuDivider />

        <p>{menu.riceFlour}</p>
      </StyleMenuBottom>
    </StyleMenuCard>
  ))}
</StyleMenuSection>



<StyleMenuSection id="kids">
  <StyleMenuSectionTitle>MENU INFANTIL / KIDS MENU</StyleMenuSectionTitle>
  <StyleMenuFullDivider />

  <StyleMenuGrid>
    {kids.map((kid) => (
      <StyleMenuCard key={kid.id}>
        <StyleMenuImage
          src={kid.image}
          alt={kid.title}
          onClick={() => openViewer(kid.image)}
          style={{ cursor: "zoom-in" }}
        />

        <StyleMenuBottom>
          <StyleMenuTopRow>
            <StyleMenuLeft>
              <StyleMenuBadgeNumber>{kid.id}</StyleMenuBadgeNumber>

              <StyleMenuTitleWrap>
                <StyleMenuTitle>{kid.title}</StyleMenuTitle>
                <StyleMenuSubtitle>{kid.subtitle}</StyleMenuSubtitle>
              </StyleMenuTitleWrap>
            </StyleMenuLeft>

            <StyleMenuPrice>{kid.price}</StyleMenuPrice>
          </StyleMenuTopRow>

          <StyleMenuLists>
            <StyleMenuList>
              {kid.es.map((it) => <li key={it}>{it}</li>)}
            </StyleMenuList>

            <StyleMenuList>
              {kid.en.map((it) => <li key={it}>{it}</li>)}
            </StyleMenuList>
          </StyleMenuLists>
        </StyleMenuBottom>
      </StyleMenuCard>
    ))}
  </StyleMenuGrid>
</StyleMenuSection>

 
    
    
    {viewerOpen && (
  <div
    onClick={closeViewer}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.75)",
      zIndex: 9999,
      display: "grid",
      placeItems: "center",
      padding: 16,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "min(1100px, 96vw)",
        height: "min(750px, 86vh)",
        background: "rgba(20,20,20,.95)",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 20px 60px rgba(0,0,0,.5)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderBottom: "1px solid rgba(255,255,255,.10)",
        }}
      >
        <div style={{ color: "rgba(255,255,255,.8)", fontWeight: 700 }}>
          Zoom: {(scale * 100).toFixed(0)}%
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={zoomOut} style={btnStyle}>-</button>
          <button onClick={zoomIn} style={btnStyle}>+</button>
          <button onClick={resetZoom} style={btnStyle}>Reset</button>
          <button onClick={closeViewer} style={{ ...btnStyle, background: "#f6a623", color: "#000" }}>
            Cerrar
          </button>
        </div>
      </div>

      {/* image area */}
      <div
        onWheel={onWheelZoom}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          flex: 1,
          position: "relative",
          cursor: scale > 1 ? "grab" : "default",
          display: "grid",
          placeItems: "center",
          userSelect: "none",
        }}
      >
        <img
          src={viewerSrc}
          alt="preview"
          draggable={false}
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: dragRef.current.dragging ? "none" : "transform .08s ease-out",
            transformOrigin: "center center",
          }}
        />
      </div>
    </div>
  </div>
)}

{viewerOpen && (
  <div
    onClick={closeViewer}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.85)",
      display: "grid",
      placeItems: "center",
      zIndex: 9999,
      padding: 16,
    }}
  >
    <button
      onClick={(e) => { e.stopPropagation(); closeViewer(); }}
      style={{
        position: "fixed",
        top: 14,
        right: 14,
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,.2)",
        background: "rgba(0,0,0,.5)",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 800
      }}
    >
      Cerrar ✕
    </button>

    <img
      src={viewerSrc}
      alt="Zoom"
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "95vw",
        maxHeight: "90vh",
        borderRadius: 14,
      }}
    />
  </div>
)}
    
    </StyleWrapper>
  );

};

export default Banner;
