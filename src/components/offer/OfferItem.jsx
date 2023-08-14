import Link from 'next/link';

const OfferItem = ({ imageSrc, badgeSrc, reviewCount, linkHref, title, category }) => (
  <div className='offer-single sibling-2'>
    <img src={imageSrc} className='offer-bg' alt='image' />
    {/* <img src={badgeSrc} className='offer-badge' alt='image' /> */}
    <div className='content'>
      <div className='review-area sibling-2'>
        <ul className='star-list'>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <i className='bi bi-star-fill' />
            </li>
          ))}
        </ul>
        {/* <span>{reviewCount} Stars</span> */}
      </div>
      <div className='title-bg'>
        <a>{title}</a>
      </div>
      <div className='category-bg'>
        <span>{category}</span>
      </div>
    </div>

    <style jsx>{`
      .title-bg {
        background-color: rgba(0, 0, 0, 0.5);
        display: inline-block;
        padding: auto;
        margin: 1rem;
        border-radius: 5px;
      }

      .category-bg {
        background-color: rgba(0, 0, 0, 0.3); /* Set a semitransparent background color for the category */
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 5px;
      }
    `}</style>
  </div>
);

export default OfferItem;
