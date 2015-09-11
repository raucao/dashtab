import remotestorage from 'dashboard/services/remotestorage';

export function initialize(container, application) {
  container.register('service:remotestorage', remotestorage);

  application.inject('route',      'rs', 'service:remotestorage');
  application.inject('controller', 'rs', 'service:remotestorage');
  application.inject('model',      'rs', 'service:remotestorage');
}

export default {
  name: 'remotestorage',
  initialize: initialize
};
