const API_BASE_URL = 'http://localhost:5000/api';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Inventory API calls
export const inventoryAPI = {
  // Get all inventory items
  getAll: () => apiCall('/inventory'),

  // Get single inventory item
  getById: (id) => apiCall(`/inventory/${id}`),

  // Create new inventory item
  create: (itemData) => apiCall('/inventory', {
    method: 'POST',
    body: JSON.stringify(itemData),
  }),

  // Update inventory item
  update: (id, itemData) => apiCall(`/inventory/${id}`, {
    method: 'PUT',
    body: JSON.stringify(itemData),
  }),

  // Delete inventory item
  delete: (id) => apiCall(`/inventory/${id}`, {
    method: 'DELETE',
  }),

  // Health check
  health: () => apiCall('/health'),
};

export default inventoryAPI;
