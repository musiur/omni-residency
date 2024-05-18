const Errors = ({ details }: { details: { errors: any; name: string } }) => {
  const { errors, name } = details;
  return errors[`${name}`] ? (
    <div className="text-pink-600">{errors[`${name}`].message}</div>
  ) : null;
};

export default Errors;
