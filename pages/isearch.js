import Code from '../components/Code';
import Layout from '../components/Layout';
import useHostname from '../hooks/use-hostname';

const Isearch = () => {
  const hostname = useHostname();

  return (
    <Layout title="Image Search Abstraction Layer">
      <p>Implements the following User stories:</p>
      <ul>
        <li>
          I can get the image URLs, alt text and page urls for a set of images
          relating to a given search string.
        </li>
        <li>
          I can paginate through the responses by adding an offset parameter to
          the URL.
        </li>
        <li>I can get a list of the most recently submitted search strings.</li>
      </ul>

      <h2>Example Search Usage:</h2>
      <Code>
        {hostname}
        /api/isearch?term=lolcats%20funny&offset=10
      </Code>

      <h2>Example Search Output:</h2>
      <Code>{`[
{
  "imageUrl": "http://www.abload.de/img/newgooglesearchkb97.png",
  "altText": "How to enable the New Google Search! - The Kaputniks",
  "pageUrl": "https://www.kaputniks.org/how-to-enable-the-new-google-search/"
},
{
  "imageUrl": "http://i.dailymail.co.uk/i/pix/2013/12/10/article-2521389-19FF829800000578-329_634x840.jpg",
  "altText": "The LOLcats of yesteryear: Incredible pictures show how animal ...",
  "pageUrl": "http://www.dailymail.co.uk/news/article-2521389/The-LOLcats-yesteryear-Incredible-pictures-animal-meme-craze-actually-began-long-Internet.html"
},
{
  "imageUrl": "https://i.warosu.org/data/jp/img/0112/74/1376081762885.png",
  "altText": "jp/ - Otaku Culture - Search: why are you saging, offset: 24",
  "pageUrl": "https://warosu.org/jp?ghost=yes&search_op=all&search_int=dontcare&search_res=post&task=search2&search_ord=new&search_text=why%20are%20you%20saging&search_del=dontcare&offset=24"
},
{
  "imageUrl": "http://i.dailymail.co.uk/i/pix/2015/11/23/15/2EBC677E00000578-3329998-image-a-144_1448293528653.jpg",
  "altText": "Belgian Twitter users post cat pictures as police hunt Paris ...",
  "pageUrl": "http://www.dailymail.co.uk/news/article-3329998/Police-ask-Belgians-not-tweet-Brussels-raids-posted-pictures-cats.html"
},
{
  "imageUrl": "http://www.cedarwrites.com/wp-content/uploads/2018/05/img_20180506_101112736759258-900x450.jpg",
  "altText": "I can Haz Desk – Cedar Writes",
  "pageUrl": "http://www.cedarwrites.com/2018/05/06/i-can-haz-desk/"
},
{
  "imageUrl": "https://i.warosu.org/data/g/thumb/0128/47/1282500705084s.jpg",
  "altText": "g/ - Technology - Search: , offset: 183672",
  "pageUrl": "https://warosu.org/g/?search_op=op&task=search2&search_ord=old&offset=183672"
},
{
  "imageUrl": "https://cdn.networklessons.com/wp-content/uploads/2017/01/xwireshark-osi-model-layer-3-4-7.png.pagespeed.a.ic.B0N_VSagOy.png",
  "altText": "Introduction to Firewalls | NetworkLessons.com",
  "pageUrl": "https://networklessons.com/cisco/asa-firewall/introduction-to-firewalls/"
},
{
  "imageUrl": "https://i.warosu.org/data/g/thumb/0128/47/1282500512624s.jpg",
  "altText": "g/ - Technology - Search: , offset: 183672",
  "pageUrl": "https://warosu.org/g/?search_op=op&task=search2&search_ord=old&offset=183672"
},
{
  "imageUrl": "http://4.bp.blogspot.com/-O5JgXqbWSyc/U6-qgn5LB_I/AAAAAAAAJeU/P4OcUpPTBDw/s1600/Ska%CC%88rmavbild+2014-05-12+kl.+22.22.29.png",
  "altText": "mitt kreativa kaos: Cameo/Silhouette tutorial for Amanda Robinson ...",
  "pageUrl": "http://mittkreativakaos.blogspot.com/2014/06/camero-tutorial-for-amanda-robinson.html"
},
{
  "imageUrl": "http://i.dailymail.co.uk/i/pix/2008/05_01/cat2804_468x564.jpg",
  "altText": "Feline funny: The cult website dedicated to comedy cats | Daily ...",
  "pageUrl": "http://www.dailymail.co.uk/news/article-562690/Feline-funny-The-cult-website-dedicated-comedy-cats.html"
}
]`}</Code>

      <h2>Example Recent Searches Usage:</h2>
      <Code>
        {hostname}
        /api/isearch/recent
      </Code>

      <h2>Example Recent Searches Output:</h2>
      <Code>{`[
{
  "term": "lolcats funny",
  "when": "2018-05-23T00:37:34.684Z"
},
{
  "term": "todd hancock",
  "when": "2018-05-23T00:10:17.644Z"
},
{
  "term": "james bond",
  "when": "2018-05-23T00:10:10.071Z"
},
{
  "term": "iron man",
  "when": "2018-05-23T00:09:28.378Z"
},
{
  "term": "spiderman",
  "when": "2018-05-23T00:09:21.008Z"
},
{
  "term": "hulk",
  "when": "2018-05-23T00:09:13.438Z"
},
{
  "term": "lolcats",
  "when": "2018-05-22T23:21:08.843Z"
},
{
  "term": "lolcats",
  "when": "2018-05-22T23:20:59.143Z"
},
{
  "term": "lolcats",
  "when": "2018-05-22T23:19:51.693Z"
},
{
  "term": "lolcats",
  "when": "2018-05-22T23:19:16.262Z"
}
]`}</Code>
    </Layout>
  );
};

export default Isearch;
