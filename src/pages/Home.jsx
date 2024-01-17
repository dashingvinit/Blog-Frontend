import React from 'react';

function Home() {
  return (
    <div style={styles.home1}>
      <div style={styles.page}>
        <div className='ads' style={styles.ads}>
            <p>ads</p>
        </div>
        <div className='content' style={styles.content}>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt repellendus facere deleniti optio, incidunt, vitae laborum enim sed fuga dolores odit velit mollitia et voluptas deserunt excepturi ipsam suscipit nobis iusto quasi! Voluptatum, doloremque? Porro doloribus explicabo hic illo magnam inventore, ipsa laboriosam ea laudantium tempore, eligendi eos. Vel eaque, architecto sapiente impedit voluptatem sequi sint iure omnis nobis nam. Illum, placeat suscipit! In dolor eius quae, minus possimus ipsa dolore, mollitia asperiores quo voluptatum nobis provident esse illo a deserunt sequi ab magnam voluptatibus ratione et velit blanditiis quisquam quod corrupti. Eius repudiandae quidem ipsam facere non aut voluptatibus cum. Repellat animi assumenda non ullam distinctio reiciendis quasi! Error, qui itaque dignissimos aliquid nostrum, molestias earum doloremque nobis perferendis consequatur repellendus omnis repellat, nulla eaque amet libero? Accusantium laborum rem quibusdam ratione sequi deserunt debitis officiis blanditiis. Ipsa modi architecto cupiditate culpa maiores est vel quaerat ad eius, repellat delectus nihil hic repellendus, placeat magni fuga dignissimos sequi velit quasi amet veniam obcaecati. Voluptates totam necessitatibus repellat illum sint iusto commodi beatae amet quod quia, odio odit asperiores! Reprehenderit quibusdam aliquid laudantium dignissimos dolor aperiam rerum fugiat quasi qui, illum ex ducimus voluptatem? Nisi, eos sit? Exercitationem voluptatum assumenda veniam, expedita ullam nulla nisi accusamus. Alias tenetur voluptas blanditiis at quo, voluptatem recusandae. Qui eos maiores, nisi illo, quis minus vitae debitis similique ipsa enim praesentium, numquam fugit voluptatibus accusamus maxime exercitationem delectus laboriosam ea? Qui sint dignissimos unde, sequi eum iusto quasi nihil tempore minima quod quo! Similique eum, at minus omnis ut porro ipsam corporis officia. Quis, dolor itaque? Quo, culpa sit necessitatibus quod tenetur eveniet quibusdam eaque provident error odit voluptas ratione molestiae! Cupiditate ad dicta blanditiis vitae, nulla odit eum esse similique provident tempore unde perspiciatis error quod veniam magni voluptatum sapiente, iste maxime! Sunt harum ducimus, asperiores a corporis, fuga cum nostrum sed velit ipsam officiis iste consequatur non accusamus vitae ut? Animi, eaque accusantium. Deleniti delectus atque perspiciatis labore nisi quasi assumenda consectetur, cumque a, inventore impedit dignissimos laborum nobis tempora, at cupiditate ipsam rem harum blanditiis? Commodi distinctio blanditiis, sit temporibus ea itaque vitae aperiam necessitatibus, sunt maxime, nostrum reprehenderit provident harum in officiis! Soluta ratione eaque, cum est ipsam rem veritatis excepturi, dolor nihil cupiditate delectus quos amet rerum? Saepe eaque recusandae iusto incidunt officiis libero eum amet. Perferendis earum architecto laborum autem minus doloribus labore quaerat voluptatibus eum. Quas ea facere dolore temporibus nihil reprehenderit vero quisquam assumenda eum fuga in nam dolorem provident culpa totam possimus, maxime quibusdam iste minus animi ratione obcaecati. Cumque voluptatum laudantium minus, tempora quo dignissimos neque rerum, voluptates natus voluptas dolor adipisci harum vitae incidunt ea. Asperiores inventore, ipsam unde, deleniti ducimus iste molestias quia perspiciatis atque id perferendis rem corrupti minus aliquid quibusdam velit. Officia eos id reiciendis libero excepturi. Magnam officia quod, voluptatibus in perspiciatis temporibus voluptas deserunt. Deleniti pariatur veritatis nobis ullam, alias, quisquam saepe illum, cum vel id unde minus tenetur atque ipsum molestias accusamus incidunt error eveniet minima.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  home1 : {
    padding: '80px 10px 20px',
  },
  page:{
    display: 'flex',
    gap:'10px'
  },
  ads:{
    margin:'10px 0px',
    padding: '20px 10px 0px 0px', 
    border: '2.5px solid #000', 
    borderRadius: '8px',
    width:'15%',
    position: 'sticky',
    top: 0,
    maxHeight: 'calc(100vh - 100px)', 
    // overflowY: 'auto',
  },
  content:{
    margin:'10px 0px',
    padding: '20px 30px 20px 20px', 
    border: '2.5px solid #000', 
    borderRadius: '8px',
    width:'85%',
    textAlign: 'justify',
  },

};


export default Home;
