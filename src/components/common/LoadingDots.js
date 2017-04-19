


componentDidMount()
{
    this.interval = setlnterval(() => {
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
            frame: this.state.frame + 1
        });
    }, this.props.interval)
}
        componentWillUnmount() {
            clearlnterval(this.interval);
        >
            renderO {
                let dots = this.state.frame % (this.props.dots + 1);
                let text = '';
                while (dots > 0) {
                    text += 1.';
                    dots—;
                >
                    return <span {...this.£rops}:>{text}&nbsp;</span>;
                >
                }
                LoadingDots.defaultProps = {
                    interval: 300, dots: 3
                    >;
                LoadingDots.propTypes = {
                    interval: PropTypes.number,
                    dots: PropTypes.number
                    >;

                export default LoadingDots;