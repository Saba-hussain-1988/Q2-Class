import styles from "/card.module.css";



const cardsData = [
    { id: 1, title: 'Card 1', image: '/public/chai3.jpg' },
    { id: 2, title: 'Card 2', image: '/public/coffee.jpg' },
    { id: 3, title: 'Card 3', image: '../public/gtk.jpg' },
    { id: 4, title: 'Card 4', image: '/public/thadal.jpg' },
    { id: 5, title: 'Card 5', image: '/public/L4 .jpg' },
    { id: 6, title: 'Card 6', image: 'C:\Users\Hp\Desktop\Governor Initiative\Quarter 2\class Assigment\assignment4\src\app\public\ml1.jpg' },
  ];
  
  export default function blog() {
    return (
      <div className={styles.container}>
        {cardsData.map(card => (
          <div
            key={card.id}
            className={styles.card}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    );
  }

// export function Blog_1(){
//     return(
//         <div className="card1">
//             <div className="image-box">

//             </div>
//             <div className="description">
//                 <h1>Coffee</h1>
//                 <p>

//                 </p>
//                 <button>Open</button>
//             </div>
//         </div>
//     )
// }

// export function Blog_2(){
//     return(
//         <div className="card2">
//             <div className="image-box">

//             </div>
//             <div className="description">
//                 <h1>Green Tea</h1>
//                 <p>

//                 </p>
//                 <button>Open</button>
//             </div>
//         </div>
//     )
// }

// export function Blog_3(){
//     return(
//         <div className="card3">
//             <div className="image-box">

//             </div>
//             <div className="description">
//                 <h1>Chai</h1>
//                 <p>

//                 </p>
//                 <button>Open</button>
//             </div>
//         </div>
//     )
// }

// export function Blog_4(){
//     return(
//         <div className="card4">
//             <div className="image-box">

//             </div>
//             <div className="description">
//                 <h1>Lemon Pani</h1>
//                 <p>

//                 </p>
//                 <button>Open</button>
//             </div>
//         </div>
//     )
// }

// export function Blog_5(){
//     return(
//         <div className="blog-card">
//             <div className="image-box">

//             </div>
//             <div className="description">
//                 <h1>Thadal</h1>
//                 <p>

//                 </p>
//                 <button>Open</button>
//             </div>
//         </div>
//     )
// }

// export function Blog_6(){
//     return(
//         <div className="blog-card">
//             <div className="image-box">

//             </div>
//             <div className="description">
//                 <h1>Lassi</h1>
//                 <p>

//                 </p>
//                 <button>Open</button>
//             </div>
//         </div>
//     )
// }