import Link from 'next/link';

const OfferItem = ({ imageSrc, badgeSrc, reviewCount, linkHref, title, duration }) => (
  <div className='offer-single sibling-2'>
    <img src={imageSrc} className='offer-bg' alt='image' />
    <img src={badgeSrc} className='offer-badge' alt='image' />
    <div className='content'>
      <div className='review-area sibling-2'>
        <ul className='star-list'>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <i className='bi bi-star-fill' />
            </li>
          ))}
          <li>
            <i className='bi bi-star-half' />
          </li>
        </ul>
        <span>{reviewCount} Review</span>
      </div>
      <Link href={linkHref}>
        <a>{title}</a>
      </Link>
      <span>{duration}</span>
    </div>
  </div>
);

export default OfferItem;
