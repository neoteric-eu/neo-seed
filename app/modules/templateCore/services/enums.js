(function() {
	'use strict';
	define([], function() {
		var enums = function() {
			return {

				features: {
					// _Custom
					ONLY_NOT_LOGGED: 'ONLY_NOT_LOGGED',


					// Bundle
					SM_BUNDLE_GET: 'SM_BUNDLE_GET',
					SM_BUNDLE_BUY: 'SM_BUNDLE_BUY',

					'ND_DOC_TPL_GET': 'ND_DOCUMENT_TEMPLATE_GET',
					'ND_DOC_TPL_CREATE': 'ND_DOCUMENT_TEMPLATE_CREATE',
					'ND_DOC_TPL_UPDATE': 'ND_DOCUMENT_TEMPLATE_UPDATE',
					'ND_DOC_TPL_DELETE': 'ND_DOCUMENT_TEMPLATE_DELETE',
					'ND_DOC_TPL_SHARE': 'ND_DOCUMENT_TEMPLATE_SHARE',
					'ND_DOC_GET': 'ND_DOCUMENT_GET',
					'ND_DOC_CREATE': 'ND_DOCUMENT_CREATE',
					'ND_DOC_UPDATE': 'ND_DOCUMENT_UPDATE',
					'ND_DOC_DELETE': 'ND_DOCUMENT_DELETE',
					'ND_DOC_SHARE': 'ND_DOCUMENT_SHARE',

					// Role
					SM_ROLE_GET: 'SM_ROLE_GET',
					SM_ROLE_CREATE: 'SM_ROLE_CREATE',
					SM_ROLE_UPDATE: 'SM_ROLE_UPDATE',
					SM_ROLE_DELETE: 'SM_ROLE_DELETE',


				},

			};

		};

		return [enums];
	});
}());
