import React, { useEffect, useState } from "react";
import CellItem from "./CellItem";

const BodyItem = props => {
    const [item, setItem] = useState(props.item);
    const orgName = props.item.login || props.item.owner.login;

    const check = (e, id) => {
        const { checked } = e.target;

        const checkedItemsStored = JSON.parse(localStorage.getItem(orgName) || "[]");

        if (checkedItemsStored.length > 2 && checked) {
            console.log('only three repos can be checked');

            setItem(prevState => {
                return { ...prevState, checked: false }
            })

            return;
        }

        setItem(prevState => {
            return { ...prevState, checked: checked }
        })


        if (checked) {
            checkedItemsStored.push(id);
        } else {
            checkedItemsStored.pop(id);
        }

        if (!checkedItemsStored.length) {
            localStorage.removeItem(orgName);
        }

        localStorage.setItem(orgName, JSON.stringify(checkedItemsStored));
    }

    useEffect(() => {
        const checkIds = JSON.parse(localStorage.getItem(orgName) || "[]");
        if (checkIds.includes(props.item.id)) {
            setItem(prevState => {
                return { ...prevState, checked: true }
            })
        }
    }, []);

    return (
        <tr className={('table-row ' + (props.isOdd ? 'odd' : 'even'))}>
            {props.checkboxes &&
                <td>
                    {(() => {
                        return <input
                            type={'checkbox'}
                            checked={item.checked || false}
                            onChange={(e) => check(e, props.item.id)}
                            disabled={false}
                            key={Math.random()}
                        />
                    })()}
                </td>
            }
            {props.filters.map((filterItem, key) => {
                const { name } = filterItem,
                    value = props.item[name] || filterItem.default_value;

                return (
                    <CellItem
                        value={value}
                        name={props.item.login}
                        field={filterItem}
                        key={key}
                    />
                )
            })}
        </tr>
    )
}

export default BodyItem;