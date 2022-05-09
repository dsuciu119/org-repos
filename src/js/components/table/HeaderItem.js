const HeaderItem = props => {
    return (
        <th>
            <span className={'epp-header-item'}>
                <span>
                    {props.item.label}
                </span>
            </span>
        </th>
    )
}

export default HeaderItem;