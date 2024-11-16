import type { NuxtAxiosConfigOptions } from '../../types'

/**
 * Hook for configuring Axios settings.
 *
 * @param {NuxtAxiosConfigOptions} options - The Axios configuration options.
 * @returns {NuxtAxiosConfigOptions} Returns the provided configuration options.
 */
export const useAxiosConfig = (options: NuxtAxiosConfigOptions) => {
  if (!options) {
    throw new Error('Axios configuration options must be provided.')
  }

  return options
}
