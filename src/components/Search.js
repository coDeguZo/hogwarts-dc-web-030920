import React from "react"

export default class Search extends React.Component {

    render(){
        // const content = this.props.content
        // ('.ui.search')
        //     .search({
        //      source: content
        // })

        return (
            <form onSubmit={this.props.handleSearch}>
                <input type="text" placeholder="Search hogs..." />
                <button  value='submit'>Search</button>
            </form>
        )
    }
}