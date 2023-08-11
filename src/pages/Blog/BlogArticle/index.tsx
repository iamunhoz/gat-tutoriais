import anacondinha from 'src/assets/images/anacondinha.png';
import { customStyled } from 'src/assets/utils/stitches';

const StyledBlogPost = customStyled('div', {
  '.text-with-float': {
    img: {
      float: 'right',
      width: 200,
    },
  },

  '.two-column-text': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 500,

    '& > *': {
      width: '50%',
    },
  },
});

export function BlogArticle(): JSX.Element {
  // const location = useLocation();

  // console.log('markdown', markdown);
  return (
    <StyledBlogPost>
      <h1>Blog article</h1>

      <div className="text-with-float">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at
          exercitationem nisi, recusandae reiciendis blanditiis excepturi
          architecto ex corrupti provident facere officiis in facilis ab labore,
          quaerat, dolorum magnam debitis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloremque tenetur optio culpa neque
          tempore animi provident consectetur consequatur a quae ipsam nihil
          <img src={anacondinha} alt={anacondinha} />
          aspernatur hic eveniet beatae perferendis voluptates veniam magni
          odio, porro dolorem numquam voluptas ratione laudantium. Laborum
          doloribus maiores distinctio, architecto, amet et, temporibus error
          optio dolorum unde nostrum veniam est quibusdam ex perferendis
          repellat aut nisi soluta libero quasi molestias eos repellendus
          debitis. Ut aliquam aut sit saepe suscipit! Itaque accusamus
          voluptatibus soluta aliquam repudiandae.
        </p>
        <p>
          Magni eaque nihil ipsa facere vitae tempore quas harum quisquam autem,
          labore possimus ex quasi ea quidem, ullam pariatur illum. Aut earum
          iure enim quod maiores dolorum accusamus placeat. Molestiae
          necessitatibus blanditiis animi quis saepe quidem sit autem sint!
          Voluptas fugiat repellat ducimus magni, neque illum veritatis nobis
          voluptatibus. Quos, amet fugiat beatae saepe quam nihil harum sed
          doloribus praesentium asperiores ipsam odit animi placeat eaque
          aliquam minima cum? Rerum corporis soluta suscipit voluptas
          voluptatibus quaerat corrupti veritatis illum. Sunt non distinctio id
          inventore dignissimos quis! Recusandae temporibus enim in. Consequatur
          dolorem temporibus unde tempora maiores distinctio dolores officia
          enim earum corrupti qui cupiditate et sit dolore molestias adipisci
          alias aperiam harum natus ad quidem non sint, perspiciatis ea!
          Reiciendis, fuga error? Aliquid!
        </p>
      </div>
      <br />
      <div className="two-column-text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          necessitatibus sapiente quod nam dolore? Facere, illum! Aut
          repellendus laborum necessitatibus minima dicta, exercitationem sint
          possimus soluta cum atque harum at inventore blanditiis et expedita
          corrupti voluptatum doloribus? Unde neque facere fuga distinctio
          recusandae eligendi provident, pariatur voluptatem molestias quod.
          Accusantium totam doloremque quia suscipit nihil, eos adipisci quo
          saepe maxime explicabo id, dicta eum ratione? Eaque voluptas animi
          nostrum veritatis quisquam. Itaque libero tempore laboriosam
          doloremque officiis quis nobis nisi, repellat ea maiores eos saepe
          velit corporis suscipit! Unde minus, autem cumque voluptatibus cum
          architecto quo facilis, amet a dolores corporis minima quam dolor.
          Perferendis commodi esse culpa expedita? Provident, facere ipsa ea
          expedita culpa animi esse? Nemo necessitatibus cum maxime cupiditate
          nam cumque ut, architecto ipsam doloremque illo a rem, modi reiciendis
          labore quidem? Accusamus, labore. Adipisci, fuga. Quis incidunt
          ratione porro, accusamus unde aperiam quas dignissimos. Commodi,
          laborum. Maxime odio rerum tenetur voluptates, nobis quae sint
          excepturi voluptas reprehenderit repellat voluptatum ab illo ipsum
          accusantium perferendis natus laborum? Laudantium temporibus quae
          iusto dolore natus dolores nam totam nisi asperiores quibusdam in unde
          voluptatibus, neque ratione iure facilis hic recusandae velit enim
          earum. Quidem sapiente eveniet repellendus fugiat, quia ipsam
          aspernatur dolorum ab asperiores deleniti iusto unde veritatis aliquid
          sequi magnam expedita deserunt nam omnis eaque odio. Facere vitae
          officia, quod omnis, fugit aliquam iusto dicta, accusantium voluptates
          in incidunt sed aspernatur non repellendus animi! Quia laborum ullam
          id perspiciatis doloribus accusantium beatae earum fugiat labore ad
          aliquam enim corrupti voluptatum molestiae eaque doloremque quaerat
          omnis, eius libero! Suscipit voluptatibus quod sint at! Debitis quo,
          temporibus ratione aliquam adipisci nam nostrum fuga ipsum dolorum
          repudiandae voluptatibus accusantium, officiis commodi, animi quasi.
          Accusamus quia nulla magnam ex id porro veritatis voluptatem aliquam
          possimus quae ullam doloremque sapiente quam consequuntur, cum eius
          nemo consequatur laudantium rerum atque sed distinctio deserunt.
          Molestiae rerum minima debitis quis est animi necessitatibus saepe
          amet hic eligendi aut dolore quo possimus esse quos aliquam pariatur,
          aliquid dicta facilis deserunt voluptatibus dignissimos reprehenderit?
          Ea deserunt ut officia culpa quibusdam, dolores voluptatibus quisquam,
          quo expedita, cumque vitae? Consequatur qui ad cumque in, quisquam
          modi aliquam consequuntur iusto voluptate, nesciunt ab excepturi saepe
          obcaecati necessitatibus facere voluptatibus incidunt maxime dolores
          nihil est labore? Suscipit iste dicta magnam voluptates corporis
          architecto excepturi dolorum ab. Assumenda quibusdam corporis dicta
          magnam laborum, totam consequatur numquam expedita accusamus
          consectetur omnis sed quis, tempore, quos reprehenderit laudantium
          labore cum similique voluptatibus animi praesentium iure aperiam?
          Voluptatibus nobis repudiandae quas molestiae, dolores ullam est
          provident tempora dolorem commodi odio voluptas in laboriosam dolorum
          omnis magni deserunt. Facere magni officiis minus incidunt, esse
          minima quasi maiores a doloremque repellat, autem tempora vitae
          repellendus dolore dicta. Ut fuga reiciendis in molestias cumque
          reprehenderit perspiciatis, distinctio nemo. Facilis voluptatibus
          porro quo nam quos impedit expedita, ipsam eius laborum, ipsum error
          numquam quas! Commodi, unde impedit repudiandae suscipit nesciunt
          doloribus. Corrupti ullam ratione error expedita quod adipisci non
          tempora impedit quae, cum nihil animi fugiat aperiam ab itaque optio.
        </p>
      </div>
    </StyledBlogPost>
  );
}
