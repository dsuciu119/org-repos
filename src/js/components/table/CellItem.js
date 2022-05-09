import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";

const CellItem = props => {
    return (
        <td>
            {(props.field.type === 'text') && <span>{props.value}</span>}
            {(props.field.type === 'link') &&
                <Link to={`/repositories/org/${props.name}`}>
                    <FontAwesomeIcon icon={faSquareUpRight} />
                </Link>
            }
        </td>
    )
}

export default CellItem;