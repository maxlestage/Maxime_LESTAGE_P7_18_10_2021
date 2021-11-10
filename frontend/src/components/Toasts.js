function Toasts() {
  return (
    <>
      <div className="toast-update w-25" aria-live="polite" aria-atomic="true">
        <div clasNames="toast">
          <div className="toast-header">
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  );
}

export default Toasts;
