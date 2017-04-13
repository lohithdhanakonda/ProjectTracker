import React from 'react'

class PageTitle extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}
PageTitle.propTypes = {
    title: React.PropTypes.string.isRequired
}
export default PageTitle