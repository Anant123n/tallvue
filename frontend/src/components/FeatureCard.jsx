export default function FeatureCard({
  number,
  title,
  description,
  wrapperClassName,
  numberClassName,
  titleClassName,
  descriptionClassName,
  blur,
}) {
  return (
    <div className={wrapperClassName}>
      {blur ? <div className={blur.className}></div> : null}

      <div className={numberClassName}>{number}.</div>

      <div className="flex min-w-0 flex-col gap-2">
        <h3 className={titleClassName}>{title}</h3>
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
}
