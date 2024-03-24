import { useState } from "react";
import { activeBtn, contactPicture } from "../data/icons";

const ContactPage = ({openModalAbout, modal}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = (evt) => {
        evt.preventDefault();
        
        fetch('http://localhost:3001/api', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'subject': subject,
                'message': message,
            }),
        })
        .then(response => response.json())
        .then(data => {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            console.log(data);
            openModalAbout('contact', null, 'success');
        })
        .catch(error => {
            console.error(error);
            openModalAbout('contact', null, 'error');
        })
    }

    return (
        <div className={`${modal ? '-z-10' : 'z-0'} duration-300 flex flex-col text-neutral-600 dark:text-neutral-400 relative w-[1180px] min-h-screen xl-a:mx-12 ml-12 mr-28 animate-[startPages_0.5s_forwards]`}>
            <section className="flex h-52 justify-center items-center uppercase font-Commissioner mb-8">
                <h1 className="text-[4rem] font-extrabold">Напишите <strong className="text-[#ffa500]">мне</strong></h1>
                <h1 className="absolute text-[7rem] text-neutral-200 dark:text-neutral-800 duration-300 -z-10 font-extrabold">Связаться</h1>
            </section>
            <section className="flex gap-10 font-jura mb-36">
                <article className="flex flex-col w-1/3 gap-y-12">
                    <h2 className="uppercase font-philosopher text-4xl font-semibold">Мои контакты</h2>
                    <ul className="flex flex-col gap-y-12">
                        <li className="relative pl-16">
                            <span className="absolute left-0 text-[#ffa500]">{contactPicture.address}</span>
                            <h4 className="uppercase text-lg font-medium text-neutral-500">Адрес</h4>
                            <b className="text-lg">Российская Федерация, город Санкт-Петербург</b>
                        </li>
                        <li className="relative pl-16">
                            <span className="absolute left-0 text-[#ffa500]">{contactPicture.email}</span>
                            <h4 className="uppercase text-lg font-medium text-neutral-500">Email</h4>
                            <b className="text-lg">doberman24@yandex.ru</b>
                        </li>
                        <li className="relative pl-16">
                            <span className="absolute left-0 text-[#ffa500]">{contactPicture.phone}</span>
                            <h4 className="uppercase text-lg font-medium text-neutral-500">Телефон</h4>
                            <b className="text-lg">+7(921)-331-2439</b>
                        </li>
                    </ul>
                    <div className="flex gap-x-5">
                        <a href="tg://resolve?domain=@it_to_move" target="_blank" rel="noopener noreferrer"
                            className="flex justify-center items-center rounded-full size-11 p-3 bg-neutral-200 dark:bg-neutral-700 duration-300 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600"
                        >
                            <img className="opacity-60 dark:invert duration-300" src={require('../img/tg.png')} alt="Telegram" />
                        </a>
                        <a href="https://vk.com/doberman242" target="_blank" rel="noopener noreferrer"
                            className="flex justify-center items-center rounded-full size-11 p-3 bg-neutral-200 dark:bg-neutral-700 duration-300 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600"
                        >
                            <img className="opacity-60 dark:invert duration-300" src={require('../img/vk.png')} alt="VK" />
                        </a>
                        <a href="https://github.com/doberman24" target="_blank" rel="noopener noreferrer"
                            className="flex justify-center items-center rounded-full size-11 p-3 bg-neutral-200 dark:bg-neutral-700 duration-300 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600"
                        >
                            <img className="opacity-60 dark:invert duration-300" src={require('../img/github.png')} alt="GitHub" />
                        </a>
                    </div>
                </article>
                <article className="w-2/3 min-w-96">
                    <form onSubmit={sendMail} method="post" className="flex w-full flex-col gap-y-8">
                        <fieldset className="flex flex-nowrap flex-col gap-y-8 lg-a:flex-row lg:gap-x-8">
                            <label className="flex border-2 rounded-full flex-grow h-14 dark:border-neutral-600 bg-white duration-300 dark:bg-neutral-900">
                                <input className="rounded-full w-full px-7 bg-transparent focus:outline-[#ffa500] focus:outline-offset-0 outline-none dark:text-neutral-200 text-neutral-800 font-bold text-xl placeholder:text-base placeholder:uppercase placeholder:font-bold duration-300"
                                    required id="name" type="text" placeholder="Ваше Имя"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label className="flex border-2 rounded-full flex-grow h-14 dark:border-neutral-600 bg-white duration-300 dark:bg-neutral-900">
                                <input className="rounded-full w-full px-7 bg-transparent focus:outline-[#ffa500] focus:outline-offset-0 outline-none dark:text-neutral-200 text-neutral-800 font-bold text-xl placeholder:text-base placeholder:uppercase placeholder:font-bold duration-300"
                                    required id="email" type="email" placeholder="Ваш Email" 
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                /> 
                            </label>
                        </fieldset>
                        <fieldset className="flex">
                            <label className="flex border-2 rounded-full flex-grow h-14 dark:border-neutral-600 bg-white duration-300 dark:bg-neutral-900">
                                <input className="rounded-full w-full px-7 bg-transparent focus:outline-[#ffa500] focus:outline-offset-0 outline-none dark:text-neutral-200 text-neutral-800 font-bold text-xl placeholder:text-base placeholder:uppercase placeholder:font-bold duration-300"
                                    id="subject" type="text" placeholder="Тема"
                                    value={subject} onChange={(e) => setSubject(e.target.value)} 
                                />
                            </label>
                        </fieldset>
                        <fieldset className="flex">
                            <textarea className="border-2 flex-grow rounded-3xl px-7 py-3 bg-transparent focus:outline-[#ffa500] -outline-offset-1 outline-none dark:text-neutral-200 dark:border-neutral-600 text-neutral-800 font-bold text-xl placeholder:text-base placeholder:uppercase placeholder:font-bold duration-300"
                                required id="message" rows="6" placeholder="Введите Ваше сообщение..."
                                value={message} onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </fieldset>
                        <button className="fillMoreBtn effectFillMoreBtn relative flex bg-transparent border border-[#ffa500] h-14 w-60 justify-center items-center rounded-full mt-8">
                            <span className="font-Commissioner rounded-full uppercase font-bold flex flex-grow justify-center items-center h-full text-sm z-[1] focus:outline-none">Отправить</span>
                            <span className="flex cursor-pointer rounded-full justify-center items-center p-4 bg-[#ffa500] z-[1]">{activeBtn.send}</span>
                        </button>
                    </form>
                </article>
            </section>
        </div>
    )
}

export default ContactPage;