import * as React from 'react';
import s from './EditProfile.module.scss';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ photo: e.target.files[0] });
    }
    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.photo);
        this.props.upload(formData);
    }
    render() {
        return (
            <div >
                <form className={s.edit} onSubmit={this.onFormSubmit}>
                    <span>File Upload</span>
                    <input type="file" name="myImage" onChange={this.onChange} />
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }

}
export default EditProfile;


