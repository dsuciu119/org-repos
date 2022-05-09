import HeaderItem from "./HeaderItem";
import React from 'react';
import BodyItem from "./BodyItem";
import ShowPerPage from "./ShowPerPage";

const Table = props => {
    let colSpan = props.filters.filter(item => item.hidden === false).length;
    let i = 0;
    return (
        <>
            <ShowPerPage event={props.event} />

            <table className="table custom-table">
                <thead>
                    <tr>
                        {props.checkboxes && colSpan++ &&
                            <HeaderItem item={{ label: '' }} key='checkbox' class={'checkbox-child'} />}
                        {props.filters.map(function (item, key) {
                            return <HeaderItem
                                item={item}
                                key={key}
                            />
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.items && props.items.length > 0 ? props.items.map(function (item, key) {
                        i++;
                        return <BodyItem
                            isOdd={(i % 2)}
                            item={item}
                            key={key}
                            {...props}
                        />
                    }) :
                        <tr className={('table-row odd')}>
                            <td className={'text-center'} colSpan={colSpan}>
                                {'No data available in table'}
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;