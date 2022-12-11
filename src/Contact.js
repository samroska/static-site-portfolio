import { Avatar } from '@mui/material';

function Contact(){
    return (
        <div className="Contact-Info">
            <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 120, height: 120 }}
                />
        </div>
    )

}

export default Contact;