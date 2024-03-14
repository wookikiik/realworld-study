import '../../styles/skeleton.css';

export const SettingFormSkeleton = () => {
  return (
    <form>
      <fieldset>
        <fieldset className="form-group">
          <input className="form-control skeleton" type="text" name="image" />
        </fieldset>
        <fieldset className="form-group">
          <input
            disabled
            className="form-control form-control-lg skeleton"
            type="text"
            name="username"
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            name="bio"
            className="form-control form-control-lg skeleton"
            rows={8}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg skeleton"
            type="text"
            name="email"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg skeleton"
            type="password"
            name="password"
          />
        </fieldset>
        <button
          type="submit"
          className="btn btn-lg btn-primary pull-xs-right skeleton"
        >
          {' '}
        </button>
      </fieldset>
    </form>
  );
};
