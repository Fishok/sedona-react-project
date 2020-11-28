import React from 'react';
import styles from './form.module.css';

const Form = () => {
    return (
        <form className={"col-12"}>
            <p><i class="fa fa-play"></i></p>
            <div className={styles["leaveFeadback"]}>
                <h3>Оставьте свой отзыв</h3>
                <p>Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях</p>
            </div>
            <hr />
            <div className={styles["formName"]}>
                <h3>Представьтесь:</h3>
                <div className={"row"}>
                    <p className={"col-3"}>ИМЯ*:</p>
                    <input className={"col-9 form-control"} type='text' />
                </div>
                <div className={"row"}>
                    <p className={"col-4"}>ФАМИЛИЯ*:</p>
                    <input className={"col-8 form-control"} type='text' />
                </div>
                <div className={"row"}>
                    <p className={"col-4"}>ОТЧЕСТВО:</p>
                    <input className={"col-8 form-control"} type='text' />
                </div>
            </div>
            <hr />
            <div className={styles["formContact"]}>
                <h3>Контактная информация:</h3>
                <p>Контактный телефон*:</p>
                <div className={"row"}>
                    <input className={"col-10 form-control"} type='tel' placeholder="Введите телефон" />
                    <div>
                        <i className={"col-2 fas fa-phone-alt fa-lg"}></i>
                    </div>
                </div>
                <p>Электронная почта*:</p>
                <div className={"row"}>
                    <input className={"col-10 form-control"} type='email' placeholder="Введите e-mail" />
                    <div>
                        <i className={"col-2 fas fa-envelope fa-lg"}></i>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles["formImpression"]}>
                <h3>Ваше общее впечатление:</h3>
                <div className={"row"}>
                    <input className="col-2" id="impression1" type='radio' name='impression' />
                    <label className="col-8 offset-1" for="impression1">Скорее положительное</label>
                </div>
                <div className={"row"}>
                    <input className="col-2" id="impression2" type='radio' name='impression' />
                    <label className="col-8 offset-1" for="impression2">Скорее отрицательное</label>
                </div>
                <div className={"row"}>
                    <input className="col-2" id="impression3" type='radio' name='impression' />
                    <label className="col-8 offset-1" for="impression3">Затрудняюсь ответить</label>
                </div>
            </div>
            <hr />
            <div className={styles["formSights"]}>
                <h3>Посещенные достопримечательности:</h3>
                <div className={"row"}>
                    <input className="col-2" type='checkbox' />
                    <p className="col-8 offset-1">Мост Дьявола</p>
                </div>
                <div className={"row"}>
                    <input className="col-2" type='checkbox' />
                    <p className="col-8 offset-1">Гора-Колокол</p>
                </div>
                <div className={"row"}>
                    <input className="col-2" type='checkbox' />
                    <p className="col-8 offset-1">Слайд-парк</p>
                </div>
                <div className={"row"}>
                    <input className="col-2" type='checkbox' />
                    <p className="col-8 offset-1">Красные скалы</p>
                </div>
            </div>
            <hr />
            <div className={styles["formDetails"]}>
                <h3>Опишите свои эмоции:</h3>
                <textarea className="col-12" rows="5" placeholder='Опишите подробно все свои восторги' />
            </div>
            <div className={styles["formSubmit"]}>
                <input className="col-12" type='submit' value='ОТПРАВИТЬ ОТЗЫВ' />
            </div>
        </form>
    );
}

export default Form;