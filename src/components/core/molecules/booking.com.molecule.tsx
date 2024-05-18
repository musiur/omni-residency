const BookingDotComRating = ({ rating }: { rating: number }) => {
  return (
    <div className="inline-flex items-center gap-[12px] px-[24px] py-[12px] rounded-full bg-muted_orange">
      <p className="flex items-center text-blue-800 [&>*]:font-bold font-bold">
        Booking
        <span className="text-blue-300">.com</span>
      </p>
      <span className="font-medium text-primary">{rating}</span>
    </div>
  );
};

export default BookingDotComRating;
