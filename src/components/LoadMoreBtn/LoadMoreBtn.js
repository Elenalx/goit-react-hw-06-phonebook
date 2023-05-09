import css from './LoadMoreBtn.module.css';

export const LoadMoreButton = ({onClick})=> {
    return (
        <div className={css.btnWrapper}>
        <button type="button" className={css.button} onClick={onClick} >LOAD MORE</button>
        </div>
    )
}