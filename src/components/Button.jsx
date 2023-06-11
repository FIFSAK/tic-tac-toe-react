function Button(props) {
    return (
        <button className="border border-slate-800"
            onClick={props.handleTheme}>

            {props.children}

        </button>
    )
}

export default Button