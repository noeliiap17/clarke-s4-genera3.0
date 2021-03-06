import React from 'react';
import ButtonFont from './../../images/text.svg';

class ChoseeFont extends React.Component {
	constructor(props){
		super(props);
		this.HandleClickMenu = this.HandleClickMenu.bind(this);
		this.state={
			visible:false,
		}
	}
	HandleClickMenu(event){
		event.preventDefault();
		this.setState({
			visible: !this.state.visible
		})
	}
  render () {
    return (
			<ul className="creation__design__options" onClick ={this.HandleClickMenu}>
				<li className="creation__design__options-font" >
					<img className="img-design" src={ButtonFont} title="fuente" alt="fuentes" />
					<ul className={`design-fonts ${this.state.visible ? 'visible' : 'no-visible'}`}>
						<li className="font" data-font-class="cookie" value="cookie" onClick={this.props.onClickCookie} ><h3>Cookie</h3></li>
						<li className="font" data-font-class="annie" value="annie" onClick={this.props.onClickAnnie}><h3>Annie</h3></li>
						<li className="font" data-font-class="philosopher" value="philosopher" onClick={this.props.onClickPhilosopher}><h3>Philosopher</h3></li>
					</ul>
				</li>
			</ul>
		);
	}
}
export default ChoseeFont;
