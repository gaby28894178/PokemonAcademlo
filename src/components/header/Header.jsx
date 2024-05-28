import style from './header.module.css';

const { header, poquebolla, line, circle, circlemini } = style;

export const Header = () => {
  return (
    <div className={header}>
  <div className={poquebolla}>
        <div className={line}></div>
        <div className={circle}></div>
        <div className={circlemini}>
        </div>
      
      </div>
    </div>
  );
};
