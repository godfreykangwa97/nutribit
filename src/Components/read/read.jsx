import React, {Component} from "react";

class Read extends Component {
    render() {
        return (
            <div className="recipe">
                <div className="cover">
                    <img src="https://media.istockphoto.com/photos/grilled-chicken-fillets-in-a-spicy-marinade-picture-id580114116?b=1&k=20&m=580114116&s=170667a&w=0&h=nAKPHyzTNU_KD4jC2zII8R3EaMc13K-k98dXJfyGShk=" alt=""/>
                </div>
                <div className="body top-down-4">
                    <div className="heading flex space-between align-center">
                        <h1>TITLE</h1>
                        <div className="options flex-inline gap-2rem">
                            <p>123,8907</p>
                            <button className={`icon-btn`}><i className="icon-btn fas fa-heart"/></button>
                            <button className={`icon-btn`}><i className="icon-btn fas fa-share-alt"/></button>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio facilis iure magnam odit vero. Ad architecto culpa distinctio dolore enim expedita magni mollitia praesentium sint voluptates. A aliquam aperiam, distinctio dolorem doloribus enim itaque molestiae quia sapiente. Autem, eum expedita iste laudantium odit tenetur? Accusantium assumenda corporis cum ducimus eaque iure nobis nostrum quasi reiciendis. Quisquam, reiciendis saepe!</p>
                </div>
                <div className="read-footer flex space-between align-center p-10">
                    <div className="author">
                        <h3>author</h3>
                        <h4>company/organization</h4>
                        <h4>city, country</h4>
                    </div>
                    <div className="date">
                        date
                    </div>
                </div>
            </div>
        )
    }
}
export default Read;