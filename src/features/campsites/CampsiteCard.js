import { Card } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardImgOverlay } from "reactstrap";
import { CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default CampsiteCard;