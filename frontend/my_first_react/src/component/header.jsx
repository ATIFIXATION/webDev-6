function header() {
  return (
    <>
      <div class="wo bg-primary-subtle  p-2 d-flex justify-content-between align-items-center">
        <div class="text-primary-subtle fs-4 fw-bold">my company</div>

        <div class="d-flex gap-3">
          <span>home</span>

          <span>about</span>

          <span>products</span>

          <span></span>
        </div>

        <div class="d-flex gap-3">
          <button class="btn btn-light">Sign In</button>
          <button class="btn btn-light">register</button>
        </div>
      </div>
    </>
  );
}

export default header;
